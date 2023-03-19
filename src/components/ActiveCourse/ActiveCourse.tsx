import classNames from 'classnames';
import React, { useState } from 'react';
import ReactHLS from 'react-hls';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CourseLessons } from '../../types/CourseLessons';
import { Lesson } from '../../types/Lesson';
import { actions as actualLessonActions } from '../../features/actualLesson';
import './ActiveCourse.scss';

type Props = {
  activeCourse: CourseLessons | null,
};

export const ActiveCourse: React.FC<Props> = ({ activeCourse }) => {
  const [lockedMessage, setLockedMessage] = useState<boolean>(false);
  const [lockedLessonId, setLockedLesonId] = useState<string>('');
  const { actualLesson } = useAppSelector(state => state.actualLesson);
  const dispatch = useAppDispatch();

  if (!activeCourse) {
    return null;
  }

  const lockedLessonMessage = (lessonId: string) => {
    setLockedMessage(true);
    setLockedLesonId(lessonId);

    setTimeout(() => {
      setLockedLesonId('');
      setLockedMessage(false);
    }, 5000);
  };

  const checkLink = (lesson: Lesson) => {
    if (lesson.link) {
      dispatch(actualLessonActions.setActualLesson(lesson));
    } else {
      dispatch(actualLessonActions.setActualLesson(lesson));
    }
  };

  const checkVideo = () => {
    return activeCourse.lessons.some(item => item.link === actualLesson?.link)
      ? actualLesson?.link
      : null;
  };

  return (
    <div className="activeCourse">
      {checkVideo() || activeCourse.lessons.find(item => item.order === 1)?.link
        ? (
          <ReactHLS
            url={checkVideo() || activeCourse.lessons.find(item => item.order === 1)?.link}
          />
        )
        : (
          <img
            className="activeCourse__image"
            src={(actualLesson && `${actualLesson?.previewImageLink}/lesson-${actualLesson?.order}.webp`) || `${activeCourse.lessons.find(item => item.order === 1)?.previewImageLink}/lesson-1.webp`}
            alt="previewImage"
          />
        )}

      <div className="activeCourse__info">
        <h1>{activeCourse.title}</h1>

        <p>{activeCourse.description}</p>

        <p>Lessons:</p>

        <ul className="activeCourse__lessons">
          {activeCourse.lessons.sort((a, b) => a.order - b.order).map(lesson => (
            <li className="activeCourse__lesson" key={lesson.id}>
              <button
                className={classNames(
                  'activeCourse__button', {
                    'activeCourse__button--locked': lesson.status === 'locked',
                  },
                )}
                type="button"
                onClick={() => {
                  return lesson.status === 'locked'
                    ? lockedLessonMessage(lesson.id)
                    : checkLink(lesson);
                }}
              >
                {`${lesson.order}. ${lesson.title}`}

                {lockedMessage && lockedLessonId === lesson.id && (
                  <div className="activeCourse__lockedMessage">
                    <p>
                      Complete all required and all optional quests on the topic to unlock video.
                    </p>
                  </div>
                )}
              </button>

              {!checkVideo() && lesson.order === 1 && lesson.link && (
                <img className="activeCourse__isPlaying" src="./img/play-button.svg" alt="play" />
              )}

              {actualLesson?.link && checkVideo() === lesson.link && (
                <img className="activeCourse__isPlaying" src="./img/play-button.svg" alt="play" />
              )}

              {!lesson.link && actualLesson?.previewImageLink === lesson.previewImageLink && (
                <img className="activeCourse__isPlaying" src="./img/play-button.svg" alt="play" />
              )}

              {actualLesson?.link && actualLesson?.link === lesson.link && (
                <p className="activeCourse__activeLesson">Last video</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
