import {View, Text} from 'react-native'

interface Post {
    userId:number;
    title:string;
    body:string;
}

export const Post = ({userId,title,body}:Post) => {
  return (
    <View style={{marginBottom:16,elevation:6,backgroundColor:'#fff',padding:8}}>
    <Text style={{fontWeight: 'bold'}}>{title}</Text>
    <View style={{marginBottom:10}}>
      <Text>
        {body}
      </Text>
      <Text>
        {`User: ${userId}`}
      </Text>
    </View>
  </View>
  )
}
