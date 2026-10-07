import { lazy, Suspense } from "react"
import Child from "./Child"

const ChildImport = lazy(() => import("./Child"))

export const Suspend = () =>{
    return <div>
        <Suspense fallback={<div> loading </div>}>
            <ChildImport />
        </Suspense>
    </div>
}