import { View, Text, StyleSheet, TextInput } from 'react-native'

interface SearchBarProps {
    text:string;
    setText:(text: string) => void;
}

export const SearchBar = ({text,setText}:SearchBarProps) => {
  return <View style={styles.content}>
  <Text style={{fontWeight:'bold',fontSize:20}}>Minuto a minuto</Text>
  <TextInput
    style={styles.inputStyle}
    placeholder='Buscar'
    value={text}
    onChangeText={setText}
  />
</View>
}

const styles = StyleSheet.create({
    content: {
      marginTop:75,
      marginHorizontal:16,
      backgroundColor:'#F7C600',
      paddingHorizontal:24,
      paddingVertical:8,
      flexDirection:'row',
      alignItems:'center'
    },
    inputStyle: {
        width:'50%',
        marginLeft:18,
        backgroundColor:'white',
        padding:6
    }
  })
