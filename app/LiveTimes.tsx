'use client'
import TimeAgo from 'react-timeago'

type Props = {
  time: string
}

const LiveTiemstamp = ({ time }: Props) => {
  return <TimeAgo date={time} />
}

export default LiveTiemstamp