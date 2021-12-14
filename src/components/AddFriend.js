import React, {useState} from 'react';

const initialValues = {
    name: "",
    age: "",
    email:""

}



const AddFriend = () => {
    const [values, setValues] = useState(initialValues);


    return (
        <div className="add-friend-container">
            <form>
                <label htmlFor="name">Name:&nbsp;</label>
                <input
                    title="name"
                    type="text"
                    name="name"
                    value={values.name}

                />
                <label htmlFor="age">Age:&nbsp;</label>
                <input
                    title="age"
                    type="text"
                    name="name"
                    value={values.age}
                />
                <label htmlFor="">Email:&nbsp;</label>
                <input
                    type="text"
                    name="email"
                    value={values.email}
                />
            </form>
        </div>
    );
};

export default AddFriend;
