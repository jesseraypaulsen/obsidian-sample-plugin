import * as React from "react";
import { useMachine } from "@xstate/react";
import { promiseMachine } from "machine";


export const ReactView = () => {
  const [state, send] = useMachine(promiseMachine)
 
  return <div>
  {/** You can listen to what state the service is in */}
  {state.matches('pending') && <p>Loading...</p>}
  {state.matches('rejected') && <p>Promise Rejected</p>}
  {state.matches('resolved') && <p>Promise Resolved</p>}
  <div>
    {/** You can send events to the running service */}
    <h4>What happened to the comma!?</h4>
    <button onClick={() => send('RESOLVE')}>Resolve</button>
    <button onClick={() => send('REJECT')}>Reject</button>
  </div>
</div>

};