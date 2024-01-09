const formatTimestamp = (timestamp: number) => {
  // Timestamp를 Date 객체로 변환
  const date = new Date(timestamp);
  const currentDate = new Date();

  const isToday =
    currentDate.getFullYear() === date.getFullYear() &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getDate() === date.getDate();

  const month = new Intl.DateTimeFormat('en-US', {
    month: 'short',
  }).format(date);
  const day = date.getDate();

  const displayDate = isToday ? 'Today' : `${month} ${day}`;

  // "Jan 8, 11:11 AM" 형식으로 포맷팅
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);

  return `${displayDate} ${formattedDate}`;
};

export default formatTimestamp;
