import React from 'react'

export type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  when?: any
}

/**
 * Declarative show/hide, as opposed to {foo && <Bar />}
 *    <Show when={foo}>
 *      <Bar />
 *    </Show>
 */
const Show = (props: React.PropsWithChildren<Props>): JSX.Element => {
  return <>{props.when ? props.children : null}</>
}

export default Show