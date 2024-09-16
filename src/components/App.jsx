import Menu from './Menu.jsx';
import VideoDetails from './VideoDetails.jsx';
import AdSection from './AdSection.jsx';
import RelatedVideos from './RelatedVideos.jsx';
import Comments from './Comments.jsx';
import '../styles/App.css';

function App() {
  const relatedVideos = [
    { thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYgYjfqH8bwyIDpeWFRWTf66QAcCxn9zeDXiHspUVFgeIUQy5jh2luRRBhOFVFVheup0', title: "Doin' Time", author: 'Lana del Rey' },
    { thumbnail: 'https://i.pinimg.com/originals/7a/e8/22/7ae822997549f38592d4d8c4b1751410.jpg', title: 'Minha Coleção de Discos de Vinil da Lana', author: 'darkparadise' },
    { thumbnail: 'https://i.pinimg.com/originals/5c/2b/7e/5c2b7eb3bb78cf282681c520b7625978.jpg', title: 'Discografia da Lana: Ordem Cronológica', author: 'born_to_live' },
    { thumbnail: 'https://amusicaltimetravellingdiamond.wordpress.com/wp-content/uploads/2014/04/lana-del-rey-west-coast.jpg?w=470&h=265', title: 'West Coast', author: 'Lana del Rey' },
  ];

  const comments = [
    { name: 'Ana Souza', date: '28/08/2024', text: 'Vídeo incrível, a voz da Lana é maravilhosa!' },
    { name: 'João Mendes', date: '27/08/2024', text: 'Adorei a qualidade do vídeo, uma obra-prima.' },
    { name: 'Maria Oliveira', date: '26/08/2024', text: 'Lana sempre entrega tudo nos clipes, perfeito!' },
    { name: 'Lucas Silva', date: '25/08/2024', text: 'Esse vídeo é um dos meus favoritos, nunca me canso de assistir.' },
  ];

  return (
    <div className="app-container">
      <Menu />
      <VideoDetails
        videoSrc="https://www.youtube.com/embed/TdrL3QxjyVw"
        title="Summertime Sadness"
        author="Lana del Rey"
        description="More Lana Del Rey: http://lanadelrey.com"
      />
      <AdSection
        adImage="https://goodstorage.com.br/wp-content/uploads/2022/08/Aprenda-como-organizar_-guardar-e-conservar-os-discos-de-vinil.webp"
        adTitle="Loja de Discos Vintage"
        adDescription="Onde a música encontra a alma."
        adLink="#"
      />
      <RelatedVideos relatedVideos={relatedVideos} />
      <Comments comments={comments} />
    </div>
  );
}

export default App;