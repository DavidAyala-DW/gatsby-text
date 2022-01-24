import classNames from 'classnames'
import { useScript } from 'usehooks-ts'

import Loader from '@/components/svg/three-dots-loader.svg'

export default function WaitlistButton(props) {
  const { children, className, ...rest } = props
  const scriptStatus = useScript(
    'https://widget.prefinery.com/widget/v2/yxzd8fjx.js'
  )
  const isReady = scriptStatus === 'ready'

  return (
    <button
      type="button"
      className={classNames('prefinery-form-cta', className)}
      disabled={!isReady}
      {...rest}
    >
      {/* {isReady ? children : <Loader className="w-12 mx-auto" title="Loading" />} */}
    </button>
  )
}
