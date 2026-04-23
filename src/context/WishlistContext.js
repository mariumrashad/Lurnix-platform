import { useWishlist } from "../../context/WishlistContext"; 

const CourseCard = ({ course, isWishlistPage = false }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const isWishlisted = isInWishlist(course.id);

  const handleHeartClick = (e) => {
    e.preventDefault();
    toggleWishlist(course); 
  };

  return (
   
    <button onClick={handleHeartClick}> 
    </button>
  );
};