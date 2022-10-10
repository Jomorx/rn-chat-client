import { View, Text } from 'react-native'
import React from 'react'
import useContacts from "../hooks/useContacts";

export default function Contacts() {
  const contact = useContacts()
    return (
      <View>{contact.map(item=>{
        return <Text key={item.contactName}>{item.contactName}</Text>
      })}
      </View>
  )
}