import ProfileSmall from "../assets/images/profile/profile-200w.webp";
import ProfileLarge from "../assets/images/profile/profile-400w.webp";


export default function AproposContent() {
    return (
        <div className="apropos-content">
            <div className="apropos-content-profile">
                <img
                    srcSet= {`${ProfileSmall} 200w}, ${ProfileLarge} 400w `}
                    sizes= "(min-width: 992px) 400px, 200px "
                    src={ProfileSmall} 
                    alt="My profile avatar"  
                />
            </div>
            <div className="apropos-content-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, tempore. Accusamus explicabo sit ut qui aliquam atque voluptate veniam distinctio laudantium earum recusandae delectus voluptatibus consequuntur magnam veritatis sunt, architecto sapiente impedit dolore incidunt iusto dolorum fugiat soluta. Sequi id necessitatibus, repellat magni quas molestias dolores veniam inventore reiciendis fuga officiis iure possimus voluptatum cum blanditiis quibusdam libero est qui tenetur consectetur nam. Repellendus eos, laboriosam quos eveniet beatae labore quia aut aliquam quae laborum ducimus unde, tempore accusantium blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, rerum. Atque asperiores quibusdam ut at ex excepturi, aspernatur sit neque ducimus omnis. Doloremque mollitia, aspernatur unde iusto magnam libero id consequatur enim vitae reprehenderit saepe consectetur perferendis nesciunt veritatis corporis repellat dolor commodi natus necessitatibus facere amet explicabo adipisci nam.</p>
            </div>

        </div>
    )
}