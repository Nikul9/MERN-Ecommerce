import React, { useContext, useState } from "react";
import { Modal , Button } from "antd"
import { useSelector } from "react-redux";
import { StarOutlined } from "@ant-design/icons"
import { GlobalContext } from "../../Context/Globlecontext";
import { useHistory, useParams } from "react-router";

const Ratings = ({children}) => {
    const { isLogin } = useContext(GlobalContext)
    const [modalVisible , setModalVisible] = useState(false)
    const history = useHistory()
    const {slug} = useParams()

    const heandelModel = () => {
        if(!isLogin) {
            history.push({
                pathname : "/login",
                state    : { from: `/product/${slug}` },
            });
        }else {
            setModalVisible(true)
        }
    } 
    return (
        <>
            <div onClick={heandelModel}>
                <StarOutlined className="text-denger" /><br /> {" "} 
                {isLogin ? "Leave Reating" : "Login to Leave Rating" }
            </div>
            <Modal
                title="Leave your rating"
                centered
                visible={modalVisible}
                onOk={() => {
                setModalVisible(false);
                }}
                onCancel={() => setModalVisible(false)}
            >
                {children}
        </Modal>
      </>
    )
}

export default Ratings