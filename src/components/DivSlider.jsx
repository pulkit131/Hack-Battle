import React from 'react';
import FAQPage from './FAQPage.jsx';
import Image1 from '../assets/p3.webp';
import Image2 from '../assets/w2a.r.png';
import Image3 from '../assets/w2b.r.png';
import Image4 from '../assets/mainphoto.jpg';

const DivSlider = () => {
    return (
        <div className='w-full h-full py-[10%] bg-green-500'>
  {/* Your content here */}


            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-white mx-auto flex'>
                {/* Strategy Section */}
                <div className='w-1/2 bg-black flex flex-col justify-center items-center text-center p-10 rounded-tl-3xl rounded-bl-3xl'>
                <div className='mx-auto mb-4'>
  <iframe 
    src='https://my.spline.design/particles-5f22f4dea11bd133bd1a982447684717/' 
    frameborder='0' 
    width='100%' 
    height='160%'
    allowFullScreen
  ></iframe>
</div>

                    <h2 className='text-white text-xl font-semibold mt-20'>Medical Image Synthesizer</h2>
                    <p className='text-white mt-4'>
                    A Generative Adversarial Network (GAN) for medical image synthesis consists of a generator that creates synthetic images from random noise using transposed convolutions, and a discriminator that distinguishes real from fake images with convolutional layers. Both networks use Binary Cross-Entropy Loss and the Adam optimizer with a learning rate of 0.0002. The training loop alternates between training the discriminator and the generator, iterating over multiple epochs to improve image realism.
                    </p>
                </div>

                {/* Execution Section */}
                <section className='flex justify-center items-center h-screen'>
  <div 
    className='p-10 rounded-tr-3xl rounded-br-3xl bg-cover bg-center ml-0 mb-10' 
    style={{ backgroundImage: `url(${Image1})`, width: '684px', height: '690px' }}
  >
    {/* Content here */}
  </div>
</section>




            </div>

            {/* Another Section */}
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-white mx-auto flex'>
                {/* Strategy Section */}
                <div className='w-1/2 bg-gray-100 flex flex-col justify-center items-center text-center p-10 rounded-tl-3xl rounded-bl-3xl'>
                <img src={Image2} alt='Strategy Icon' className='mx-auto mb-4 w-32 h-32' />

                    <h2 className='text-xl font-semibold'>Deep-Fake Img Recognition</h2>
                    <p className='text-gray-600'>
                    Deepfake image recognition aims to detect manipulated images and distinguish them from authentic ones. The implementation typically utilizes a convolutional neural network (CNN) to extract features from images, followed by fully connected layers for classification. The model is trained on a dataset containing both real and deepfake images, using Binary Cross-Entropy Loss and the Adam optimizer for updates. The training process enables the model to identify subtle artifacts and inconsistencies characteristic of deepfakes, improving its ability to classify new images as real or fake.
                    </p>
                </div>

                {/* Execution Section */}
                <div className='w-1/2 bg-whitw-100 flex flex-col justify-center items-center text-center p-10 rounded-tr-3xl rounded-br-3xl'>
                    <img src={Image3} alt='Execution Icon' className='mx-auto mb-4 w-32 h-32' />
                    <h2 className='text-xl font-semibold'>Execution</h2>
                    <p className='text-gray-600'>
                    The implementation of deepfake image recognition began with data collection, where we gathered a comprehensive dataset consisting of both real and deepfake images. Next, we constructed a convolutional neural network (CNN) designed to extract relevant features, complemented by fully connected layers for effective classification. During the training phase, we utilized Binary Cross-Entropy Loss alongside the Adam optimizer, iterating through multiple epochs to optimize the model's performance. After training, we evaluated the model on a separate validation set to measure its accuracy in classifying images as real or fake. Finally, we integrated the trained model into applications for real-time deepfake detection, enabling efficient and reliable verification of image authenticity.</p>
                </div>
            </div>

            {/* Another Section */}
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-black mx-auto flex'>
                {/* Strategy Section */}
               <section className='flex justify-center items-center h-screen'>
  <div 
    className='p-10 rounded-tl-3xl rounded-bl-3xl bg-cover bg-center ml-4 ' 
    style={{ backgroundImage: `url(${Image4})`, width: '648px', height: '729px' }}
  >
    {/* Content here */}
  </div>
</section>

                {/* Execution Section */}
                <div className='w-1/2 bg-black flex flex-col justify-center items-center text-center p-10 rounded-tr-3xl rounded-br-3xl ml-5'>
                <div className='mx-auto mb-20'>
  <iframe 
    src='https://my.spline.design/ai-60a38404a0f2fca32ca19ac8abf9de0e/'
    frameborder='0' 
    width='100%' 
    height='160%'
    allowFullScreen
  ></iframe>
</div>
                    <h2 className='text-white text-xl font-semibold'>Medical Prescription Analyzer</h2>
                    <p className='text-white'>
                    A medical prescription analyzer utilizes machine learning to extract and interpret data from prescriptions. It processes handwritten or printed prescriptions, identifying key information such as medication names and dosages. This analysis enhances accuracy in medication management and reduces errors in patient care.
                    </p>
                </div>
            </div>
            {/* FAQ Section */}
            {/* <div className='w-full sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-blue-100 mx-auto '>
                <FAQPage /> 
            </div> */}

            
        </div>
    );
}

export default DivSlider;
