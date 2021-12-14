import React, {useState} from 'react';
import axios from "axios";



const credentials = {
    username: "",
    password: "",
    // role: "admin",
    // token:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
}



const Login = () => {
    const [values, setValues] = useState(credentials);
    console.log(values)



    const login = values => {
        axios.post("http://localhost:9000/api/login", values)
            .then(res => {
                console.log(res.data)
                const token = res.data.token;
                const username = res.data.username;
                const role = res.data.role

                localStorage.setItem("token", token)
                localStorage.setItem("username", username)
                localStorage.setItem("role", role)
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                window.location.href="/friends"
            })
    }

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setValues({
            ...values,
            [name]: value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        console.log("Submitted")
        login(values)

    }







    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username:&nbsp;</label>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={onChange}
                />
                &nbsp;
                &nbsp;
                <label htmlFor="password">Password:&nbsp;</label>
                <input
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                />
                &nbsp;
                &nbsp;
                <button>Login</button>
            </form>

        </div>
    );
};

export default Login;






































