import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

const CounterNumber = () => {
    const [counterState, setCounterState] = useState(false)
  return (
    <div>
        <ScrollTrigger onEnter={() => setCounterState(true)}  onExit={() => setCounterState(false)}>
                {
                    counterState && <CountUp start={0} end={1500}  duration={2.75} />
                }
                <span>+</span>
        </ScrollTrigger>
    </div>
  )
}

export default CounterNumber