import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer FUl7aFPDGbDRb5L-KrRBY0RZ9_LiuZC8PUlZdkV45_KfAt55xTumXj1EdrfLjxD7GYyUIkMwwckAcX0aL5FuCH0oJNeucuO9zlNDALrNzCJqRa6vy-bVAF5uTy_HX3Yx"
    }
});

