import Avatar from './avatar'
import LaunchIcon from '@mui/icons-material/Launch';

const AppCard = ({
  children,
  picOrgin,
  picAlt = 'Avatar',
  appName,
  website = '#',
  ...otherArgs
}) => {

  return (
    <div className="p-4 flex border border-gray-200 dark:border-gray-900 rounded mt-6">
      <Avatar pic={picOrgin} name={picAlt} />
      <div className="flex flex-col">
        <div className="flex content-between">
          <div className="flex-col">
            <div name={`${appName}`} className="text-xl mb-2 ">
              <strong>{appName}</strong>
            </div>
            <div className="flex flex-row">
                <div className="mr-2">
                    <p>
                        <img src={`https://img.shields.io/website?down_color=red&down_message=down&up_color=green&up_message=up&url=${website}`}/>
                    </p>
                </div>
                { otherArgs? Object.keys(otherArgs).map((keyName, i) => {
                    return <div className="mr-2">
                        <p>
                            <img src={otherArgs[keyName]}/>
                        </p>
                    </div>
                }) : <div></div> }
            </div>
          </div>
          <a
            type="button"
            href={`${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-md shadow text-sm font-semibold"
          >
            <LaunchIcon fontSize="small"/> Website
          </a>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  )
}

export default AppCard;
