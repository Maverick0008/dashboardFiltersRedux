import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import {selectVisiblePositions} from 'store/positions/positionSelector'
import { selectorFilters } from 'store/filters/filterSelector';
import { addFilter } from 'store/filters/filterAction';
const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectorFilters)
  const positions = useSelector(state => selectVisiblePositions(state, currentFilters))

  const handleAddFilter = (filter) => {
      dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} handleAddFilter={handleAddFilter} />
      ))}
    </div>
  )
}

export {JobList};