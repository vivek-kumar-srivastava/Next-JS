/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return[
            {
                source:'/login',
                destination:'/',
                permanent:false
            },
            {
                source:'/studentlist/:student',
                destination:'/',
                permanent:false
            }
        ]
    }
};

export default nextConfig;
