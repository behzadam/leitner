import LayoutDashboard from "./LayoutDashboard"

type LayoutFactoryProps = {
  children?: React.ReactNode
  layout?: string
}

const LayoutFactory = ({ layout, children }: LayoutFactoryProps): JSX.Element => {
  switch (layout) {
    case 'dashboard':
      return <LayoutDashboard>{children}</LayoutDashboard>
    case 'nested':
      return <LayoutNested>{children}</LayoutNested>
    default:
      break;
  }
}