import { getNewFeedItems } from '@/getNewFeedItems'
import { getFeedUrlList } from '@/getFeedUrlList'
import { addFeedItems } from '@/addFeedItems'
import dotenv from 'dotenv'
dotenv.config()

async function index() {
  const feedUrlList = await getFeedUrlList()
  feedUrlList.forEach(async (feedUrl: string) => {
    if (feedUrl) {
      try {
        const newFeedItems = await getNewFeedItems(feedUrl)
        await addFeedItems(newFeedItems)
      } catch (error) {
        console.error(error)
      }
    }
  })
}

index()
