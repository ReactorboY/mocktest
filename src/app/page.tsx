
import ComingSoonVersion from "@/components/ComingSoonVersion/ComingSoonVersion";
import Head from "next/head";

export default function Home() {  
  return (    
    
      <>       
      <Head>
      <link
          rel="canonical"
          href="https://mockyard.com/"
          key="canonical"
        />     
    </Head>
        {/* Standard Version */}
        <ComingSoonVersion />
      </>
  );
}
