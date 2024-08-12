export function useCheckTime(data) {
  const initTimeInSec = +data.hour * 3600 + +data.minute * 60 + +data.second;
  const currentTimeInSec =
    Number(new Date().getHours() * 3600) +
    Number(new Date().getMinutes() * 60) +
    Number(new Date().getSeconds());
  const diffTime = currentTimeInSec - initTimeInSec;
  const seconds = diffTime % 60;
  const minutes = Math.floor(diffTime / 60);
  return `${minutes} minute ${seconds} seconds`;
}
