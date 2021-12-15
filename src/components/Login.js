import React, {useState} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

const credentials = {
    username: "",
    password: ""
};

const Login = () => {
    const [values, setValues] = useState(credentials);

    const login = () => {
        axiosWithAuth()
            .post("/login", values)
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
        login(values);
    };

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
                    type="password"
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






































