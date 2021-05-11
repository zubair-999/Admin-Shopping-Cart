import React from 'react'
import { Redirect, useHistory} from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import {signin} from "../../../redux/actions/SigninAction";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDispatch} from "react-redux";
import {isLogin} from "../../../utils";


const Login = () => {
  const history=useHistory()
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (email, password) => {
      dispatch(signin({ email, password }, () => {
        history.push("/dashboard")
      }))
    }
  });
  if (isLogin()) {
    return <Redirect to="/dashboard" />
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                      )}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.password && formik.touched.password && (
                        <p>{formik.errors.password}</p>
                      )}
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          type="submit"
                          onSubmit={formik.handleSubmit}
                          disabled={!formik.isValid}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login;
