import OriginalSearchBar from '@theme-original/SearchBar'
import React from 'react'

export default function SearchBarWithAnalytics(props) {
  return (
    <>
      <TraceEvent events={[BrowserEvent.onClick]} name={SharedEventName.SEARCH_BAR_CLICKED}>
        {/* Required for onClick to register */}
        <div>
          <OriginalSearchBar {...props} />
        </div>
      </TraceEvent>
    </>
  )
}
