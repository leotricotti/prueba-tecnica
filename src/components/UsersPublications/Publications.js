import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersListContext } from "../../Contexts/UsersListContext";
import { Modal } from "../Modal";
import useMergedPublications from "../../CustomHooks/useMergedPublications";
import thumbsUp from "../../assets/images/thumb-up.png";
import commentsIcon from "../../assets/images/comment-icon.png";
import refreshIcon from "../../assets/images/refresh-icon.png";
import sendIcon from "../../assets/images/send-icon.png";
import heartIcon from "../../assets/images/heart-icon.svg";
import likeIcon from "../../assets/images/like-icon.svg";
import styled, { keyframes, css } from "styled-components";

const SocialDetailsIcons = ({ icon }) => {
  return <StyledSocialDetailsIcons src={icon} alt="Social icon" />;
};

const SocialIcon = ({ icon }) => {
  return <StyledSocialIcon src={icon} alt="Social icon" />;
};

export const Publications = ({ usersPhotos, usersPosts }) => {
  const [postId, setPostId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { usersList } = useContext(UsersListContext);
  const [selectedUser, setSelectedUser] = useState([]);
  const [dataMerged, setDataMerged] = useState([]);
  const { id } = useParams();
  const mergedData = useMergedPublications(
    selectedUser,
    usersPhotos,
    usersPosts
  );

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  useEffect(() => {
    setDataMerged(mergedData);
  }, [mergedData]);

  const handlePublications = (id) => {
    const numericId = parseInt(id, 10);
    const user = usersList.find((item) => item.id === numericId);
    setSelectedUser([user]);
  };

  useEffect(() => {
    handlePublications(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleDeletePost = (postId) => {
    setPostId(postId);
    setShowModal(true);
  };

  const handleConfirm = (postId) => {
    setShowModal(false);
    setDataMerged((prevData) =>
      prevData.map((items) =>
        items.map((post) =>
          post.id === postId ? { ...post, deleted: true } : post
        )
      )
    );
    setTimeout(() => {
      setDataMerged((prevData) =>
        prevData.map((items) => items.filter((post) => post.id !== postId))
      );
    }, 500);
  };

  return (
    <StyledPublicationsWrapper>
      <StyledHiddenModal visible={showModal}>
        <Modal
          text={"¿Estás seguro de que deseas eliminar esta publicación?"}
          confirm={"Aceptar"}
          cancel={"Cancelar"}
          handleConfirm={() => handleConfirm(postId)}
          handleCancel={() => setShowModal(false)}
        />
      </StyledHiddenModal>
      {dataMerged.map((items) =>
        items.map((item, index) => (
          <StyledPublicationsContainer key={index} deleted={item.deleted}>
            <StyledPublicationsHeader>
              <StyledHeaderImage src={item.avatar} />
              <StyledHeaderInfo>
                <StyledNameContainer>
                  <StyledName>{item.first_name}</StyledName>
                  <StyledName>{item.last_name}</StyledName>
                </StyledNameContainer>
                <StyledText>{item.email}</StyledText>
              </StyledHeaderInfo>
              <StyledDeleteButton onClick={() => handleDeletePost(item.id)}>
                <StyledSvg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                </StyledSvg>
              </StyledDeleteButton>
            </StyledPublicationsHeader>
            <StyledPublicationsBody>
              <StyledPublicationsText>{item.body}</StyledPublicationsText>
              <StyledPublicationsImage src={item.albumUrl} />
            </StyledPublicationsBody>
            <StyledFooterContainer>
              <StyledSocialDetailsContainer>
                <SocialDetailsIcons icon={heartIcon} />
                <SocialDetailsIcons icon={likeIcon} />
                <StyledSocialDetailsText>{item.num1}</StyledSocialDetailsText>
                <StyledSocialDetailsText>
                  {item.num2} comentarios
                </StyledSocialDetailsText>
                <StyledSocialDetailsText>-</StyledSocialDetailsText>
                <StyledSocialDetailsText>
                  {item.num3} veces compartido
                </StyledSocialDetailsText>
              </StyledSocialDetailsContainer>
              <StyledSocialActionsContainer>
                <StyledSocialButtons>
                  <SocialIcon icon={thumbsUp} />
                </StyledSocialButtons>
                <StyledSocialButtons>
                  <SocialIcon icon={commentsIcon} />
                </StyledSocialButtons>
                <StyledSocialButtons>
                  <SocialIcon icon={refreshIcon} />
                </StyledSocialButtons>
                <StyledSocialButtons>
                  <SocialIcon icon={sendIcon} />
                </StyledSocialButtons>
              </StyledSocialActionsContainer>
            </StyledFooterContainer>
          </StyledPublicationsContainer>
        ))
      )}
    </StyledPublicationsWrapper>
  );
};

const StyledHiddenModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const StyledPublicationsWrapper = styled.main`
  width: 100%;
  height: auto;
  position: relative;
  top: 6rem;
  display: flex;
  flex-direction: column;
`;

const StyledPublicationsContainer = styled.div`
  width: 100%;
  max-width: 375px;
  height: auto;
  background-color: #fff;
  top: 6rem;
  margin: 1rem auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  ${({ deleted }) =>
    deleted &&
    css`
      animation: ${fadeOutPublication} 0.5s ease-in-out;
    `}
  ease-in-out;
`;

const StyledPublicationsHeader = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: flex-start;
`;

const StyledHeaderImage = styled.img`
  width: 3rem;
  heght: 3rem;
  border-radius: 50%;
  margin: 0.5rem;
`;

const StyledDeleteButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
  margin: 0.8rem 0.8rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 4;
  padding: 0.2rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;

const StyledSvg = styled.svg`
  color: rgba(0, 0, 0, 0.6);
`;

const StyledHeaderInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin: 0.5rem 0 0;
`;

const StyledNameContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  gap: 0.3rem;
  margin: 0.3rem 0 0;
`;

const StyledName = styled.h5`
  color: rgba(0, 0, 0, 0.75);
  font-size: 0.875rem;
`;

const StyledText = styled.p`
  font-size: 0.75rem;
  color: #6c757d;
  margin: 0 0 0.25rem;
`;

const StyledPublicationsBody = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledPublicationsImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledPublicationsText = styled.p`
  text-align: justify;
  padding: 0.5rem 0.5rem 1rem;
  font-size: 0.75rem;

  ::first-letter {
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;

const StyledFooterContainer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const StyledSocialDetailsContainer = styled.div`
  width: 100%;
  height: 1.5em;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  position: relative;
`;

const StyledSocialDetailsIcons = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;

  :hover:nth-child(1) {
    transform: scale(1.2);
  }

  :hover:nth-child(2) {
    transform: scale(1.2);
  }
`;

const StyledSocialDetailsText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.7rem;
  padding: 0.1rem 0.2rem 0;
  transition: all 0.1s ease-in;
  cursor: pointer;

  :nth-child(4) {
    position: absolute;
    right: 1rem;
  }

  :nth-child(5) {
    position: absolute;
    right: 6.4rem;
  }

  :nth-child(6) {
    position: absolute;
    right: 7rem;
  }

  :hover {
    color: #378fe9;
    text-decoration: underline;
  }
`;

const StyledSocialActionsContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const StyledSocialButtons = styled.button`
  width: 5rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledSocialIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
  opacity: 0.5;
`;

const fadeOutPublication = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;
