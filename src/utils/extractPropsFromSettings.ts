/* eslint-disable max-len */
import LibrarySettings from '@/types/LibrarySettings';
import CustomProps from '@/types/CustomProps';
import ComponentSettings from '@/types/ComponentSettings';
import ComponentName from '@/types/ComponentName';

const extractPropsFromComponentSettings = function extractPropsFromComponentSettings(args: ComponentSettings): CustomProps {
  const componentVariants = args && args.variants ? args.variants : undefined;
  const componentClasses = args && args.classes ? args.classes : undefined;
  const componentFixedClasses = args && args.fixedClasses ? args.fixedClasses : undefined;
  const wrapped = args && args.wrapped ? args.wrapped : undefined;
  const locales = args && args.locales ? args.locales : undefined;
  const locale = args && args.locale ? args.locale : undefined;
  const lang = args && args.lang ? args.lang : undefined;

  const customProps: CustomProps = {};

  if (componentFixedClasses !== undefined) {
    customProps.fixedClasses = {
      type: [String, Array, Object],
      default: () => componentFixedClasses,
    };
  }

  if (componentVariants !== undefined) {
    customProps.variants = {
      type: Object,
      default: () => componentVariants,
    };
  }

  if (componentClasses !== undefined) {
    customProps.classes = {
      type: [String, Array, Object],
      default: () => componentClasses,
    };
  }

  if (wrapped !== undefined) {
    customProps.wrapped = {
      type: Boolean,
      default: wrapped,
    };
  }

  if (locales !== undefined) {
    customProps.locales = {
      type: Object,
      default: () => locales,
    };
  }

  if (locale !== undefined) {
    customProps.locale = {
      type: Object,
      default: () => locale,
    };
  }

  if (lang !== undefined) {
    customProps.lang = {
      type: String,
      default: lang,
    };
  }

  if (Object.keys(customProps).length) {
    return customProps;
  }

  return undefined;
};

const extractPropsFromLibrarySettings = function extractPropsFromSettings(args: LibrarySettings | undefined, componentName: ComponentName): CustomProps {
  if (args && args[componentName]) {
    return extractPropsFromComponentSettings(args[componentName]);
  }

  return undefined;
};


export { extractPropsFromLibrarySettings, extractPropsFromComponentSettings };
