import { Suspense, useState } from 'react'

import './App.css'
import { Form } from '../components/1.Form/index';
import { FormAction } from '../components/2.Action/index';
import { Suspend } from '../components/3.Suspense/SuspenseDemo';
import { UseReducer } from '../components/4.useReducer/index';

function App() {

  return (
    <>
    {/* <Form/> */}
    {/* <FormAction/> */}
    {/* <Suspend /> */}
    <UseReducer />
    </>
  )
}

export default App
