import Toast from "react-native-simple-toast";
export function showToast(msg: string) {
  Toast.show(msg,3000);
}
