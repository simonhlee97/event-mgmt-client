import {createClient} from 'contentful'

export const useContentful = () => { 
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN,
  });

  const getEvents = async () => { 
    try {
      const events = await client.getEntries({
        content_type: 'event',
        select: 'fields'
      });
      const sanitizedEntries = events.items.map((item) => { 
        return {
          ...item.fields,
        }
      })
      return sanitizedEntries;
    } catch (error) {
      console.log(`errors fetching events: ${error}`);
    }
  }
  return {getEvents}
}
