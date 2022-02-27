import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  buyMobile,
  sellMobile,
  getAllusers,
  getSingleUser,
  addUser,
  editUser,
  deleteUser
} from "../redux/actions/mobile-action";

const MobileDetails = ({
  numOfMobiles,
  buyMobile,
  sellMobile,
  users,
  getAllusers,
  getSingleUser,
  user,
  addUser,
  editUser,
  deleteUser
}) => {
  return (
    <div className="text-center">
      <h1>
        Number Of Mobiles :{numOfMobiles} & USers :{users.length} & user:
        {user.name}
      </h1>
      <button className="btn-sm p-2 m-1" onClick={() => buyMobile()}>
        buyMobile
      </button>
      <button className="btn-sm p-2 m-1" onClick={() => sellMobile()}>
        sellMobile
      </button>
      <button
        className="btn-sm p-2 m-1"
        onClick={() => addUser({ name: "hem" })}
      >
        Add User
      </button>
      <button className="btn-sm p-2 m-1" onClick={() => getAllusers()}>
        Get all users
      </button>
      <button className="btn-sm p-2 m-1" onClick={() => getSingleUser(1)}>
        Get Single users
      </button>
      <button
        className="btn-sm p-2 m-1"
        onClick={() => editUser({ name: "chinnuSiri" }, 1)}
      >
        Edit User
      </button>
      <button className="btn-sm p-2 m-1" onClick={() => deleteUser(1)}>
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    numOfMobiles: state.numOfMobiles,
    users: state.users,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyMobile,
      sellMobile,
      getAllusers,
      getSingleUser,
      addUser,
      editUser,
      deleteUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
