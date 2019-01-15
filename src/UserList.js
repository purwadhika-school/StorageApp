import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import firebase from "@firebase/app"
import "@firebase/database"

const UserID = "dsfbsj72348"
class UserList extends Component {
  state = {
    name: "",
    phone: ""
  }

  componentDidMount() {
    this.getDataUsers()
  }

  getDataUsers = () => {
    const usersRef = firebase.database().ref("Users/" + UserID)
    usersRef.once("value", function(snapshot) {
        console.log(snapshot.val())
    //   const { name, phone } = snapshot.val()
    //   this.setState({ name: snapshot.val().name })
    //   if (name && name !== "") {
    //     this.setState({ name })
    //   }

    //   if (phone && phone !== "") {
    //     this.setState({ phone })
    //   }
    })
  }

  render() {
    return (
      <View>
        <Text>Name: {this.state.name}</Text>
        <Text>Phone: {this.state.phone}</Text>
      </View>
    )
  }
}

export default UserList
