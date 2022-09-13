type LayoutNestedProps = {
  children?: React.ReactNode
}

const LayoutNested = ({ children }: LayoutNestedProps): JSX.Element => {
  return (
    <>{children}</>
  )
}

export default LayoutNested;