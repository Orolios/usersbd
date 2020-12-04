import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
//import { GET_USERS } from "../../services/api";
import Api from '../../services/api';



class User extends Component {

    state = {
      users: []
    }


  componentDidMount() {
      Api.get('me',{'Content-Type':'application/json'})
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }


  render() {
    const { users } = this.state;

    return (
        <React.Fragment>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>

                <TableCell>Name</TableCell>
                <TableCell>email</TableCell>
                <TableCell>cpf</TableCell>

              </TableRow>
            </TableHead>
            <TableBody size="small">

                <TableRow key={users.id}>
                  <TableCell>{users.id}</TableCell>
                  <TableCell>{users.username}</TableCell>
                  <TableCell>{users.email}</TableCell>
                  <TableCell>{users.cpf}</TableCell>
                </TableRow>


            </TableBody>
          </Table>
        </React.Fragment>
    );
  }
}

export default User;
