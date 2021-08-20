import React from "react";
import Toast from "react-native-toast-message";
import IToast from "../component/general/IToast";

export const showMessage = (content, type) => {
  Toast.show({
    type,
    position: "bottom",
    text1: content,
    text2: "This is some something 👋",
    visibilityTime: 2000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
    onPress: () => {},
  });
};

export const toastConfig = {
  success: ({ props, ...rest }) => <IToast {...rest} />,
  error: ({ props, ...rest }) => <IToast {...rest} />,
  info: ({ props, ...rest }) => <IToast {...rest} />,
};
