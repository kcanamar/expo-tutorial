import { 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native'
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from "../../../constants"
import styles from './nearbyjobs.style'
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"
import useFetch from '../../../hook/useFetch'

const NearbyJobs = () => {
  const router = useRouter()
  const isLoading = false
  const error = false
  const data = [1,2,3,4,5,6,7,8,9]
  // const { data, isLoading, error } = useFetch('search', {query: 'React Developer',num_pages: 1})

  // console.log("Fetch call",data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        { isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ): (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id ? job.job_id : job}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs