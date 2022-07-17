import { Modal, useMantineTheme } from "@mantine/core";

export default function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            name="worksAT"
            placeholder="Works at"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            name="livesIN"
            placeholder="Lives In"
            className="infoInput"
          />
          <input
            type="text"
            name="Country"
            placeholder="Country"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Relationship Status"
            className="infoInput"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
      {/* Modal content */}
    </Modal>
  );
}
