export const requestNotifyPermission = () => {
  return Notification.requestPermission().then(function(result) {
    console.log(result)
  })
}

export const createNotification = ({ title, text, img } = {}) => {
  new Notification(title, { body: text, icon: img })
}
