import { useContext } from "react";
import BillContext from "./BillContext";

export const useStore = () => {
    return useContext(BillContext)
}