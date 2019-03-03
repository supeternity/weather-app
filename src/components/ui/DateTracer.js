import React from 'react';

const DateTracer = (date, format, locale) => {

  if (/^\d\d\d\d-\d\d-\d\d/.test(date)) {
    const trace = {
      array: date.split('-')
    }
  
    trace.date = new Date(
      trace.array[0],
      trace.array[1] !== '0' ? trace.array[1]-1 : 0,
      trace.array[2]
      );
  
    if (format === 'long') {
      trace.options = {
        day: 'numeric',
        month: 'long',
      };
      trace.complete = trace.date.toLocaleString(locale, trace.options);
    } else if (format === 'short') {
      trace.options = {
        day: 'numeric',
        month: 'numeric',
      };
      trace.complete = trace.date.toLocaleString(locale, trace.options);
    }
  
    return (
      <>
        {trace.complete}
      </>
    );
  } else {
    return date;
  }

  
}

export default DateTracer;
