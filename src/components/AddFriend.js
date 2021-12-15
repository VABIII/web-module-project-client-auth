import React, {useState} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

const initialValues = {
    name: "",
    age: "",
    email:""

};

const AddFriend = () => {
    const [values, setValues] = useState(initialValues);

    const addFriend = newFriend => {
        axiosWithAuth()
            .post("/friends", newFriend)
            .then(() => {
                window.location.href="/friends"
            })
            .catch(err => {
                console.error(err)
            });
    };

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmit = evt => {
        evt.preventDefault();
        addFriend(values);
    };

    return (
        <div className="add-friend-container">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name:&nbsp;</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                />
                &nbsp;
                <label htmlFor="age">Age:&nbsp;</label>
                <input
                    type="text"
                    name="age"
                    value={values.age}
                    onChange={onChange}
                />
                &nbsp;
                <label htmlFor="">Email:&nbsp;</label>
                <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                />
                &nbsp;
                <button>Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriend;
