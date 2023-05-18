import { useState, useEffect } from "react";

// Custom hook to merge selected user data with users' photos and posts
const useMergedPublications = (selectedUser, usersPhotos, usersPosts) => {
  // State to hold the merged data
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    // Check if a selected user is available
    if (selectedUser) {
      // Merge the selected user's data with photos and posts
      const mergedDataArray = selectedUser.map((item) => {
        const userId = item.id;
        const { first_name, last_name, avatar, email } = item;

        // Combine the user's posts with matching photos
        const combinedData = usersPosts.reduce((acc, post) => {
          if (post.userId === userId) {
            const { id, title, body } = post;

            // Find a matching photo based on albumId
            const matchingPhoto = usersPhotos.find(
              (photo) => photo.albumId === id
            );

            if (matchingPhoto) {
              const { url } = matchingPhoto;

              // Generate random numbers for social comments
              const num1 = Math.floor(Math.random() * 100) + 1;
              const num2 = Math.floor(Math.random() * 100) + 1;
              const num3 = Math.floor(Math.random() * 100) + 1;

              // Add the merged data to the accumulator array
              acc.push({
                id,
                title,
                albumUrl: url,
                body,
                first_name,
                last_name,
                avatar,
                email,
                num1,
                num2,
                num3,
              });
            }
          }

          return acc;
        }, []);

        // Return a slice of the combined data array (first 12 elements)
        return combinedData.slice(0, 12);
      });

      // Update the state with the merged data
      setMergedData(mergedDataArray);
    }
  }, [selectedUser, usersPhotos, usersPosts]);

  // Return the merged data
  return mergedData;
};

export default useMergedPublications;
