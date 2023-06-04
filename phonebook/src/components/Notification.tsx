import { useEffect } from 'react';
interface INotification {
  isError: boolean,
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<{
    isError: boolean;
    message: string;
}>>
}

const Notification = ({isError, message, setMessage}: INotification) => {
  const textAndBorderColor = isError? 'red': 'green';
  const styleNotif: object = {
    color: textAndBorderColor,
    background: 'lightgrey',
    fontStyle: 'italic',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  useEffect(() => {
    if (message !== '') {
      setTimeout(() => {
        setMessage((msg) => ({...msg, message: ''}));
      }, 2500);
    }
  }, [message])

  if (message === '') {
    return null
  };
  return (
    <div className="notification" style={styleNotif}>
      {message}
    </div>
  )
}

export default Notification;