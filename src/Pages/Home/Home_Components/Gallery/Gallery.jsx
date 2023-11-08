const Gallery = () => {
    return (
        <div className="my-[60px]">
            <section className="py-6 dark:text-gray-50">
                <div className="common_Heading text-center">
                    {/* <h3 className="font-bold text-[#23aade] mb-[20px] text-[20px]">Core Features</h3> */}
                    <h1 className="text-5xl font-bold text-[#23aade]">Gallery</h1>
                    <div className="textPadingAbout text-[#737373] mx-[30px] sm:mx-[60px] lg:mx-[230px]">
                        <p className="py-6 text-[16px] capitalize">Some pictures of our Share Food donation campaign</p>
                    </div>
                </div>
                <div className="container max-w-[1240px] grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://i.ibb.co/F08d02N/254503-1600x1030-how-organize-food-drive.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/nfLLGtV/download-1.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/dtHsqyy/download.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/VJX2YpZ/images-1.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/mHgCNck/images.jpg" />
                    {/* <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                    <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" /> */}
                </div>
            </section>
        </div>
    );
};







export default Gallery;