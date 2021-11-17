import { useFormik } from "formik"
import * as Yup from 'yup'


const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .max(15, "Username est trop long")
                .required("Username est requis"),
            password: Yup.string()
                .min(6, "password trop court")
                .required("Password est requis"),
        }),
    })

    console.log(formik.errors)

    return (
        <div className="container">
            <form className="my-5" onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-3">
                        <label className="text-light">Username</label>
                        <input
                            className="form-control my-1 border border-warning border border-4"
                            name="username"
                            type="text"
                            placeholder="Enter username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.username && <p className="text-light">{formik.errors.username}</p>}
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-3">
                        <label className="text-light">Password</label>
                        <input
                            className="form-control my-1 border border-warning border border-4"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && <p className="text-light">{formik.errors.password}</p>}
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login