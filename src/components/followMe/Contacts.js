import React, { Fragment } from "react";
import { SocialLinks } from "../../data/SocialLinks";
import { AnimatePresence, motion } from "framer-motion";

function Contacts() {
  return (
    <AnimatePresence>
      <Fragment>
        <p className="text-2xl text-gray-400 capitalize">Follow me on</p>

        <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
          {SocialLinks &&
            SocialLinks.map((link) => (
              <motion.a
                whileTap={{ scale: 0.8 }}
                key={link.id}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
              >
                {link.icon}
                <p className="text-lg text-textBase ">{link.name}</p>
              </motion.a>
            ))}
        </div>
      </Fragment>
    </AnimatePresence>
  );
}

export default Contacts;
