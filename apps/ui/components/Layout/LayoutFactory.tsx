import { Layout } from "@ui/types"
import LayoutDashboard from "./LayoutDashboard"
import LayoutNested from "./LayoutNested"

type LayoutFactoryProps = {
  children?: React.ReactNode
  layout?: Layout
}

const LayoutFactory = ({ layout, children }: LayoutFactoryProps): JSX.Element => {
  switch (layout) {
    case 'dashboard':
      return <LayoutDashboard>{children}</LayoutDashboard>
    case 'nested':
      return <LayoutNested>{children}</LayoutNested>
    default:
      return <>{children}</>
  }
}

export default LayoutFactory;