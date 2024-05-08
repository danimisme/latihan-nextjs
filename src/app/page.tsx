import dynamic from "next/dynamic";

const ImageBanner = dynamic(() => import("@/components/ImageBanner"), {
  loading: () => <p>Loading...</p>,
});
export default function Home() {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-gray-600">My Blog Website</h1>
        <div className="py-4 text-gray-600">
          <div className="py-4">
            {/* <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            /> */}
            <ImageBanner url="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dolorum culpa molestiae saepe ex. Expedita nesciunt aspernatur sint
            quisquam iusto rem commodi dicta, reprehenderit iste quo sequi
            incidunt id laboriosam minus ex harum culpa! Architecto veritatis
            numquam eligendi. In ipsa quae sequi minus corporis. Sint tenetur
            illo debitis blanditiis dolorem?
          </p>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eum
            labore nostrum adipisci ut quas nihil quam, repellat illum nemo enim
            unde odit ipsa eveniet minus, dolores corrupti sint dolorem magnam
            molestiae quos vel hic?
          </p>
        </div>
      </div>
    </>
  );
}
