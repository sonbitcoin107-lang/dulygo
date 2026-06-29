// src/data/courses.js
// Master course list with all 20 topics

import greetings from './lessons/greetings.js';
import colors from './lessons/colors.js';
import animals from './lessons/animals.js';
import food from './lessons/food.js';
import family from './lessons/family.js';
import numbers from './lessons/numbers.js';
import weather from './lessons/weather.js';
import school from './lessons/school.js';
import body from './lessons/body.js';
import transport from './lessons/transport.js';
import home from './lessons/home.js';
import clothes from './lessons/clothes.js';
import time from './lessons/time.js';
import emotions from './lessons/emotions.js';
import actions from './lessons/actions.js';
import hobbies from './lessons/hobbies.js';
import city from './lessons/city.js';
import adjectives from './lessons/adjectives.js';
import nature from './lessons/nature.js';
import phrases from './lessons/phrases.js';

export const COURSES = [
  {
    id: 'greetings', title: 'Chào hỏi', titleEn: 'Greetings', emoji: '👋',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: greetings, totalXp: 100, description: 'Học cách chào hỏi bằng tiếng Anh',
    guidebook: [
      { en: "Hello! What's your name?", vi: "Xin chào! Bạn tên gì?" },
      { en: "My name is Minh.", vi: "Tôi tên là Minh." },
      { en: "Nice to meet you!", vi: "Rất vui được gặp bạn!" },
      { en: "How are you today?", vi: "Hôm nay bạn khỏe không?" },
      { en: "I'm fine, thank you!", vi: "Tôi khỏe, cảm ơn bạn!" },
    ],
  },
  {
    id: 'colors', title: 'Màu sắc', titleEn: 'Colors', emoji: '🎨',
    color: '#FF9600', colorDark: '#CC7A00', colorLight: '#FFE7C0',
    lessons: colors, totalXp: 80, description: 'Các màu sắc trong tiếng Anh',
    guidebook: [
      { en: "What color is this?", vi: "Đây là màu gì?" },
      { en: "It is red.", vi: "Đây là màu đỏ." },
      { en: "My favorite color is blue.", vi: "Màu yêu thích của tôi là màu xanh dương." },
      { en: "The sky is light blue.", vi: "Bầu trời màu xanh nhạt." },
      { en: "I like yellow and green.", vi: "Tôi thích màu vàng và màu xanh lá." },
    ],
  },
  {
    id: 'animals', title: 'Động vật', titleEn: 'Animals', emoji: '🐶',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: animals, totalXp: 100, description: 'Tên các con vật bằng tiếng Anh',
    guidebook: [
      { en: "I have a dog and a cat.", vi: "Tôi có một con chó và một con mèo." },
      { en: "The dog is very friendly.", vi: "Con chó rất thân thiện." },
      { en: "What animal do you like?", vi: "Bạn thích con vật nào?" },
      { en: "I love rabbits!", vi: "Tôi yêu thích những con thỏ!" },
      { en: "The elephant is very big.", vi: "Con voi rất to lớn." },
    ],
  },
  {
    id: 'food', title: 'Đồ ăn', titleEn: 'Food', emoji: '🍎',
    color: '#FF4B4B', colorDark: '#CC3C3C', colorLight: '#FFDDDD',
    lessons: food, totalXp: 100, description: 'Thức ăn và đồ uống',
    guidebook: [
      { en: "I am hungry.", vi: "Tôi đói bụng." },
      { en: "Can I have some water, please?", vi: "Cho tôi xin một chút nước được không?" },
      { en: "This pizza is delicious!", vi: "Chiếc bánh pizza này thật ngon!" },
      { en: "I like fruits and vegetables.", vi: "Tôi thích trái cây và rau củ." },
      { en: "What would you like to eat?", vi: "Bạn muốn ăn gì?" },
    ],
  },
  {
    id: 'family', title: 'Gia đình', titleEn: 'Family', emoji: '👨‍👩‍👧',
    color: '#CE82FF', colorDark: '#9B5FC0', colorLight: '#F0D9FF',
    lessons: family, totalXp: 80, description: 'Các thành viên trong gia đình',
    guidebook: [
      { en: "This is my mother.", vi: "Đây là mẹ của tôi." },
      { en: "My father is a teacher.", vi: "Bố tôi là giáo viên." },
      { en: "I have one brother and one sister.", vi: "Tôi có một anh trai và một chị gái." },
      { en: "My grandparents live with us.", vi: "Ông bà tôi sống cùng với chúng tôi." },
      { en: "I love my family very much.", vi: "Tôi yêu gia đình tôi rất nhiều." },
    ],
  },
  {
    id: 'numbers', title: 'Con số', titleEn: 'Numbers', emoji: '🔢',
    color: '#FFD900', colorDark: '#D4A800', colorLight: '#FFF9C4',
    lessons: numbers, totalXp: 80, description: 'Đếm số bằng tiếng Anh',
    guidebook: [
      { en: "One, two, three, four, five.", vi: "Một, hai, ba, bốn, năm." },
      { en: "How many apples are there?", vi: "Có bao nhiêu quả táo?" },
      { en: "There are ten students in class.", vi: "Có mười học sinh trong lớp." },
      { en: "I am seven years old.", vi: "Tôi bảy tuổi." },
      { en: "The number twenty is my favorite.", vi: "Số hai mươi là số yêu thích của tôi." },
    ],
  },
  {
    id: 'weather', title: 'Thời tiết', titleEn: 'Weather', emoji: '☀️',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: weather, totalXp: 60, description: 'Nói về thời tiết',
    guidebook: [
      { en: "What is the weather like today?", vi: "Hôm nay thời tiết thế nào?" },
      { en: "It is sunny and warm.", vi: "Trời nắng và ấm áp." },
      { en: "I don't like rainy days.", vi: "Tôi không thích những ngày mưa." },
      { en: "It's very cold in winter.", vi: "Mùa đông rất lạnh." },
      { en: "Bring an umbrella, it will rain.", vi: "Mang ô theo nhé, trời sắp mưa rồi." },
    ],
  },
  {
    id: 'school', title: 'Trường học', titleEn: 'School', emoji: '🏫',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: school, totalXp: 80, description: 'Đồ dùng và hoạt động ở trường',
    guidebook: [
      { en: "I go to school every day.", vi: "Tôi đi học mỗi ngày." },
      { en: "My pencil case is on the desk.", vi: "Hộp bút của tôi ở trên bàn." },
      { en: "We have math class today.", vi: "Hôm nay chúng tôi có tiết toán." },
      { en: "The teacher is writing on the board.", vi: "Giáo viên đang viết lên bảng." },
      { en: "I like studying with my friends.", vi: "Tôi thích học cùng bạn bè." },
    ],
  },
  {
    id: 'body', title: 'Cơ thể', titleEn: 'Body', emoji: '💪',
    color: '#FF9600', colorDark: '#CC7A00', colorLight: '#FFE7C0',
    lessons: body, totalXp: 80, description: 'Các bộ phận cơ thể',
    guidebook: [
      { en: "I have two eyes and a nose.", vi: "Tôi có hai mắt và một cái mũi." },
      { en: "My hands are clean.", vi: "Tay tôi sạch sẽ." },
      { en: "Touch your head!", vi: "Chạm vào đầu bạn đi!" },
      { en: "My legs are strong.", vi: "Chân tôi rất khỏe." },
      { en: "Wash your hands before eating.", vi: "Rửa tay trước khi ăn nhé." },
    ],
  },
  {
    id: 'transport', title: 'Phương tiện', titleEn: 'Transport', emoji: '🚗',
    color: '#FF4B4B', colorDark: '#CC3C3C', colorLight: '#FFDDDD',
    lessons: transport, totalXp: 80, description: 'Các loại phương tiện giao thông',
    guidebook: [
      { en: "I go to school by bus.", vi: "Tôi đi học bằng xe buýt." },
      { en: "My dad drives a car.", vi: "Bố tôi lái xe ô tô." },
      { en: "I want to ride a bicycle.", vi: "Tôi muốn đi xe đạp." },
      { en: "The train is very fast.", vi: "Tàu hỏa rất nhanh." },
      { en: "Can we take a taxi?", vi: "Chúng ta có thể bắt taxi không?" },
    ],
  },
  {
    id: 'home', title: 'Ngôi nhà', titleEn: 'Home', emoji: '🏠',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: home, totalXp: 80, description: 'Các phòng và đồ vật trong nhà',
    guidebook: [
      { en: "I sleep in my bedroom.", vi: "Tôi ngủ trong phòng ngủ của mình." },
      { en: "We eat in the kitchen.", vi: "Chúng tôi ăn trong bếp." },
      { en: "The sofa is in the living room.", vi: "Ghế sofa ở trong phòng khách." },
      { en: "My room is clean and tidy.", vi: "Phòng của tôi sạch sẽ và gọn gàng." },
      { en: "Please close the door.", vi: "Làm ơn đóng cửa lại giúp tôi." },
    ],
  },
  {
    id: 'clothes', title: 'Quần áo', titleEn: 'Clothes', emoji: '👕',
    color: '#CE82FF', colorDark: '#9B5FC0', colorLight: '#F0D9FF',
    lessons: clothes, totalXp: 80, description: 'Trang phục và phụ kiện',
    guidebook: [
      { en: "I am wearing a blue shirt.", vi: "Tôi đang mặc một chiếc áo màu xanh." },
      { en: "It's cold, put on your jacket.", vi: "Trời lạnh rồi, hãy mặc áo khoác vào." },
      { en: "I like wearing dresses.", vi: "Tôi thích mặc váy." },
      { en: "These shoes are too small.", vi: "Đôi giày này quá nhỏ." },
      { en: "What are you wearing today?", vi: "Hôm nay bạn mặc gì vậy?" },
    ],
  },
  {
    id: 'time', title: 'Thời gian', titleEn: 'Time', emoji: '⏰',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: time, totalXp: 80, description: 'Các ngày trong tuần và thời gian',
    guidebook: [
      { en: "What time is it now?", vi: "Bây giờ là mấy giờ rồi?" },
      { en: "It is eight o'clock.", vi: "Bây giờ là tám giờ." },
      { en: "Today is Monday.", vi: "Hôm nay là thứ Hai." },
      { en: "I wake up at seven in the morning.", vi: "Tôi thức dậy lúc bảy giờ sáng." },
      { en: "The weekend is Saturday and Sunday.", vi: "Cuối tuần gồm thứ Bảy và Chủ Nhật." },
    ],
  },
  {
    id: 'emotions', title: 'Cảm xúc', titleEn: 'Emotions', emoji: '😄',
    color: '#FFD900', colorDark: '#D4A800', colorLight: '#FFF9C4',
    lessons: emotions, totalXp: 80, description: 'Diễn đạt cảm xúc bằng tiếng Anh',
    guidebook: [
      { en: "I am very happy today!", vi: "Hôm nay tôi rất vui!" },
      { en: "Why are you sad?", vi: "Tại sao bạn buồn vậy?" },
      { en: "Don't be afraid, I am here.", vi: "Đừng sợ, tôi ở đây với bạn." },
      { en: "I feel excited about the trip.", vi: "Tôi cảm thấy hào hứng về chuyến đi." },
      { en: "Are you angry with me?", vi: "Bạn có tức giận với tôi không?" },
    ],
  },
  {
    id: 'actions', title: 'Hành động', titleEn: 'Actions', emoji: '🏃',
    color: '#FF9600', colorDark: '#CC7A00', colorLight: '#FFE7C0',
    lessons: actions, totalXp: 80, description: 'Các động từ hành động',
    guidebook: [
      { en: "I run in the park every morning.", vi: "Tôi chạy trong công viên mỗi buổi sáng." },
      { en: "She is jumping over the rope.", vi: "Cô ấy đang nhảy qua sợi dây." },
      { en: "Can you swim?", vi: "Bạn có biết bơi không?" },
      { en: "He is reading a book.", vi: "Anh ấy đang đọc sách." },
      { en: "Let's dance together!", vi: "Cùng nhảy múa nào!" },
    ],
  },
  {
    id: 'hobbies', title: 'Sở thích', titleEn: 'Hobbies', emoji: '⚽',
    color: '#FF4B4B', colorDark: '#CC3C3C', colorLight: '#FFDDDD',
    lessons: hobbies, totalXp: 80, description: 'Sở thích và thể thao',
    guidebook: [
      { en: "What is your hobby?", vi: "Sở thích của bạn là gì?" },
      { en: "I like playing soccer.", vi: "Tôi thích chơi bóng đá." },
      { en: "She loves drawing pictures.", vi: "Cô ấy rất thích vẽ tranh." },
      { en: "I play the guitar on weekends.", vi: "Tôi chơi đàn guitar vào cuối tuần." },
      { en: "Reading books is my hobby.", vi: "Đọc sách là sở thích của tôi." },
    ],
  },
  {
    id: 'city', title: 'Thành phố', titleEn: 'City', emoji: '🏙️',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: city, totalXp: 80, description: 'Các địa điểm trong thành phố',
    guidebook: [
      { en: "The hospital is near the park.", vi: "Bệnh viện ở gần công viên." },
      { en: "Where is the nearest school?", vi: "Trường học gần nhất ở đâu?" },
      { en: "I go shopping at the market.", vi: "Tôi đi mua sắm ở chợ." },
      { en: "The library has many books.", vi: "Thư viện có rất nhiều sách." },
      { en: "Let's meet at the coffee shop.", vi: "Hãy gặp nhau ở quán cà phê nhé." },
    ],
  },
  {
    id: 'adjectives', title: 'Mô tả', titleEn: 'Adjectives', emoji: '✨',
    color: '#CE82FF', colorDark: '#9B5FC0', colorLight: '#F0D9FF',
    lessons: adjectives, totalXp: 80, description: 'Tính từ mô tả sự vật',
    guidebook: [
      { en: "This flower is very beautiful.", vi: "Bông hoa này rất đẹp." },
      { en: "The box is heavy.", vi: "Cái hộp này nặng." },
      { en: "My cat is small and cute.", vi: "Con mèo của tôi nhỏ và đáng yêu." },
      { en: "The soup is hot.", vi: "Bát súp này nóng." },
      { en: "That is an interesting story.", vi: "Đó là một câu chuyện thú vị." },
    ],
  },
  {
    id: 'nature', title: 'Thiên nhiên', titleEn: 'Nature', emoji: '🌿',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: nature, totalXp: 80, description: 'Thiên nhiên và môi trường',
    guidebook: [
      { en: "The tree has many green leaves.", vi: "Cây có nhiều lá màu xanh." },
      { en: "I love the ocean.", vi: "Tôi yêu thích đại dương." },
      { en: "The mountains are very tall.", vi: "Những ngọn núi rất cao." },
      { en: "Let's protect the environment.", vi: "Hãy bảo vệ môi trường nhé." },
      { en: "Flowers bloom in spring.", vi: "Hoa nở vào mùa xuân." },
    ],
  },
  {
    id: 'phrases', title: 'Giao tiếp', titleEn: 'Phrases', emoji: '💬',
    color: '#FFD900', colorDark: '#D4A800', colorLight: '#FFF9C4',
    lessons: phrases, totalXp: 80, description: 'Câu giao tiếp hàng ngày',
    guidebook: [
      { en: "Excuse me, can you help me?", vi: "Xin lỗi, bạn có thể giúp tôi không?" },
      { en: "I don't understand, please repeat.", vi: "Tôi không hiểu, vui lòng nói lại." },
      { en: "Thank you very much!", vi: "Cảm ơn bạn rất nhiều!" },
      { en: "You're welcome!", vi: "Không có gì!" },
      { en: "See you tomorrow!", vi: "Hẹn gặp lại vào ngày mai!" },
    ],
  },
];

export const getCourseById = (id) => COURSES.find(c => c.id === id);
export const getTotalCourses = () => COURSES.length;
