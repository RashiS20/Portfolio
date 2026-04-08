type IconName =
  | 'command'
  | 'download'
  | 'copy'
  | 'github'
  | 'linkedin'
  | 'sun'
  | 'moon'
  | 'search'
  | 'enter'
  | 'close'
  | 'mail'

export function Icon({ name }: { name: IconName }) {
  switch (name) {
    case 'command':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M9 5a3 3 0 0 0-3 3v1H5a3 3 0 0 0 0 6h1v1a3 3 0 0 0 6 0v-1h2v1a3 3 0 0 0 6 0v-1h1a3 3 0 0 0 0-6h-1V8a3 3 0 0 0-6 0v1h-2V8a3 3 0 0 0-3-3Zm-1 3a1 1 0 0 1 2 0v1H8V8Zm6 0a1 1 0 0 1 2 0v1h-2V8ZM5 11h1v2H5a1 1 0 0 1 0-2Zm3 0h2v2H8v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm4 0h1a1 1 0 0 1 0 2h-1v-2Zm-12 4h2v1a1 1 0 1 1-2 0v-1Zm8 0h2v1a1 1 0 1 1-2 0v-1Z"
          />
        </svg>
      )
    case 'download':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4A1 1 0 0 1 8.7 10.3L11 12.59V4a1 1 0 0 1 1-1ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
          />
        </svg>
      )
    case 'copy':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M8 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7Zm2 0v10h8V7h-8ZM4 9a1 1 0 0 1 1 1v9h9a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2v-9a1 1 0 0 1 1-1Z"
          />
        </svg>
      )
    case 'github':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.36-1.17-3.36-1.17-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.36-2.22-.26-4.56-1.12-4.56-4.98 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.87-2.34 4.72-4.57 4.98.36.31.68.93.68 1.88V21c0 .26.18.59.69.48A10 10 0 0 0 12 2Z"
          />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.94 6.5A2.19 2.19 0 1 1 7 2.12a2.19 2.19 0 0 1-.06 4.38ZM5 21V8h4v13H5Zm7 0V8h3.84v1.78h.05c.53-1 1.84-2.05 3.78-2.05C23 7.73 23 10.1 23 13.18V21h-4v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.63-2.42 3.32V21h-4Z"
          />
        </svg>
      )
    case 'sun':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1 1-1h0a1 1 0 1 1-2 0h0a1 1 0 0 1 1 1Zm0 18a1 1 0 0 1 1-1h0a1 1 0 1 1-2 0h0a1 1 0 0 1 1 1ZM4.22 5.64a1 1 0 0 1 1.41 0l.01.01a1 1 0 0 1-1.42 1.42l-.01-.01a1 1 0 0 1 0-1.42Zm14.14 14.14a1 1 0 0 1 1.41 0l.01.01a1 1 0 0 1-1.42 1.42l-.01-.01a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1Zm18 0a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1ZM5.64 19.78a1 1 0 0 1 0-1.41l.01-.01a1 1 0 1 1 1.42 1.42l-.01.01a1 1 0 0 1-1.42 0Zm14.14-14.14a1 1 0 0 1 0-1.41l.01-.01a1 1 0 0 1 1.42 1.42l-.01.01a1 1 0 0 1-1.42 0Z"
          />
        </svg>
      )
    case 'moon':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21 15.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 12.5Z"
          />
        </svg>
      )
    case 'search':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10.5 3a7.5 7.5 0 1 1 4.77 13.29l3.72 3.72a1 1 0 0 1-1.42 1.42l-3.72-3.72A7.5 7.5 0 0 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
          />
        </svg>
      )
    case 'enter':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 7a1 1 0 0 1 1 1v3h8a1 1 0 0 1 0 2H5v3a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1Zm11.3 2.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.4-1.4l1.29-1.3H13a1 1 0 1 1 0-2h3.59l-1.3-1.3a1 1 0 0 1 0-1.4Z"
          />
        </svg>
      )
    case 'close':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.3 6.3a1 1 0 0 1 1.4 0L12 10.6l4.3-4.3a1 1 0 1 1 1.4 1.4L13.4 12l4.3 4.3a1 1 0 1 1-1.4 1.4L12 13.4l-4.3 4.3a1 1 0 0 1-1.4-1.4L10.6 12 6.3 7.7a1 1 0 0 1 0-1.4Z"
          />
        </svg>
      )
    case 'mail':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0 6 4.5L18 6H6Zm12 2.5-6 4.5-6-4.5V18h12V8.5Z"
          />
        </svg>
      )
    default:
      return null
  }
}

