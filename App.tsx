import { useEffect, useMemo, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import { getPostsByUserId } from './app/services/api'
import { Post } from './components/post'
import { isCloseToBottom } from './utils'
import { IPosts } from './interfaces'
import { SearchBar } from './components/searchBar'

export default function App() {
  const [posts, setPosts] = useState<IPosts[]>([])
  const [author, setAuthor] = useState(1)
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    getPosts()
  }, [author])

  const getPosts = async () => {
    setLoading(true)
    const allAuthorPosts = await getPostsByUserId({userId:author})
    setPosts(prePosts=>[...prePosts,...allAuthorPosts?.data])
    setLoading(false)
  }

  const filterTextBy = (value: string) => value.toLowerCase().includes(text.toLowerCase())

  const filteredData = useMemo(() => {
    return text ? posts.filter(post=>filterTextBy(post.title) || filterTextBy(post.body))
    : posts
  }, [text,posts])

  return (
    <>
      <SearchBar text={text} setText={setText} />
      <SafeAreaView style={styles.container}>
        <View style={{height:'75%'}}>
          <ScrollView
            style={{width:300}}
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent) && !loading && author<11) {
                setAuthor(prev=>prev+1)
              }
            }}
            scrollEventThrottle={400}
          >
              {filteredData?.map(post => (
                <Post key={`${post.userId}-${post.id}`} {...post} />
              ))}
          </ScrollView>
          {loading &&
            <ActivityIndicator color={'#666'} size={48} />
          }
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
